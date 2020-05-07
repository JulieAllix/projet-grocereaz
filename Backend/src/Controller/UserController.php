<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Ingredient;
use App\Entity\ShoppingList;
use App\Entity\ShoppingListIngredient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 *@Route("/api/user")
 */
class UserController extends AbstractController
{
    private $apiKey;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    /**
     * @Route("/", name="user_home_page")
     */
    public function userHomePage(Request $request, SerializerInterface $serializer)
    {

        if ($request->isMethod('POST')) {
            $data  = $request->getContent();
            $data  = json_decode($data);
            $token = $data->token;
            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $shoppingLists = $user->getShoppingList()->toArray();
            $shoppingListData = [];

            foreach ($shoppingLists as $key => $value) {

                $shoppingListData[$key]['id']    = $value->getId();
                $shoppingListData[$key]['title']    = $value->getTitle();
            }
            return $this->json([
                'shoppingList' => $shoppingListData,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true
            ]);
        }
    }

    /**
     * @Route("/shopping-lists", name="user_shopping_lists")
     */
    public function userShoppingLists(Request $request, SerializerInterface $serializer)
    {

        if ($request->isMethod('POST')) {
            $data  = $request->getContent();
            $data  = json_decode($data);
            $token = $data->token;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }
            $shoppingLists = $user->getShoppingList()->toArray();
            $shoppingListTitle = [];

            foreach ($shoppingLists as $key) {

                $shoppingListTitle[] = $key->getTitle();
                $shoppingListTitle[]    = $key->getId();
            }

            return $this->json([
                'shoppingList' => $shoppingListTitle,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true
            ]);
        }
    }


    /**
     * @Route("/shopping-list", name="user_shopping_list", methods={"POST"})
     */
    public function userShoppingList(Request $request, SerializerInterface $serializer)
    {
        if ($request->isMethod('POST')) {
            $data  = $request->getContent();
            $data  = json_decode($data);
            $token = $data->token;
            $shopId = $data->shoppingListId;
            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);
            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            $shoppingList = $entityManager->getRepository(ShoppingList::class)->findBy(['id' => $shopId]);
            $currentListIngredients = $entityManager->getRepository(ShoppingListIngredient::class)->findBy(['shoppingList' => $shopId]);

            $currentShoppingList = [];
            for ($i = 0; $i < count($currentListIngredients); $i++) {

                $currentIngredientId    = $currentListIngredients[$i]->getIngredient()->getId();

                $currentIngredientName  = $currentListIngredients[$i]->getIngredient()->getName();
                $currentAmount          = floatval($currentListIngredients[$i]->getAmount());
                $currentUnit            = $currentListIngredients[$i]->getUnit();
                $currentShoppingList[$i]['id']   = $currentIngredientId;
                $currentShoppingList[$i]['name']   = $currentIngredientName;
                $currentShoppingList[$i]['amount'] = $currentAmount;
                $currentShoppingList[$i]['unit']   = $currentUnit;
            }


            return $this->json([
                'userShoppingList'  => $currentShoppingList,
                'firstname'         => $user->getFirstname(),
                'lastname'          => $user->getLastname(),
                'email'             => $user->getEmail(),
                'avatar'            => $user->getAvatar(),
                'resultat'          => true
            ]);
        }

        return $this->json(['resultat' => 'test']);
    }

    /**
     * @Route("/shopping-list-add", name="user_shopping_list_add")
     */
    public function userShoppingListAdd(Request $request, SerializerInterface $serializer)
    {
        if ($request->isMethod('POST')) {
            $data              = $request->getContent();
            $data              = json_decode($data);
            $token             = $data->token;
            $shoppingListTitle = $data->shoppingListTitle;
            $ingredientsList   = $data->ingredientsList;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            $shoppingList = new ShoppingList();
            $shoppingList->setTitle($shoppingListTitle);
            $shoppingList->setCreatedAt(new \Datetime());
            $shoppingList->setUser($user);
            $entityManager->persist($shoppingList);
            $entityManager->flush();

            foreach ($ingredientsList as $key => $value) {

                $ingredientRequestId = $value->id;
                $ingredientRequestName  = $value->name;

                $ingredient = $entityManager->getRepository(Ingredient::class)->findOneBy(['id' => $ingredientRequestId]);

                if ($ingredient === null) {
                    $newIngredient = new Ingredient;
                    $newIngredient->setId($ingredientRequestId);
                    $newIngredient->setName($ingredientRequestName);
                    $entityManager->persist($newIngredient);
                    $entityManager->flush();
                }
            }

            foreach ($ingredientsList as $key => $value) {

                $ingredientRequestId = $value->id;
                $ingredientRequestName  = $value->name;

                $newIngredientAgain = $entityManager->getRepository(Ingredient::class)->findOneBy(['id' => $ingredientRequestId]);

                $shoppingListIngredient = new ShoppingListIngredient();

                $shoppingListIngredient->setShoppingList($shoppingList);
                $shoppingListIngredient->setIngredient($newIngredientAgain);
                $shoppingListIngredient->setAmount($value->amount);
                $shoppingListIngredient->setUnit($value->unit);
                $entityManager->persist($shoppingListIngredient);
            }
            $entityManager->flush();

            $shoppingList = $shoppingList->getTitle();

            return $this->json([
                'shoppingList' => $shoppingList,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        }
    }

    /** 
     * @Route("/shopping-list-update/{id}", name="user_shopping_list_update")
     */
    public function userShoppingListUpdate(Request $request, SerializerInterface $serializer, ShoppingList $shoppingList)
    {
        if ($request->isMethod('POST')) {
            $data                     = $request->getContent();
            $data                     = json_decode($data);
            $token                    = $data->token;
            $ingredientsRequestList   = $data->ingredientsList;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            // Get current user shopping list id
            $currentListId = $shoppingList->getId();

            // Fetch current ingredients in db
            $currentList = $entityManager->getRepository(ShoppingListIngredient::class)->findBy(['shoppingList' => $currentListId]);

            // Make an array with current list's ingredients
            $currentShoppingList = [];
            for ($i = 0; $i < count($currentList); $i++) {

                $currentIngredientId    = $currentList[$i]->getIngredient()->getId();
                $currentIngredientName  = $currentList[$i]->getIngredient()->getName();
                $currentAmount          = floatval($currentList[$i]->getAmount());
                $currentUnit            = $currentList[$i]->getUnit();

                $currentShoppingList[$i]['id']     = $currentIngredientId;
                $currentShoppingList[$i]['name']   = $currentIngredientName;
                $currentShoppingList[$i]['amount'] = $currentAmount;
                $currentShoppingList[$i]['unit']   = $currentUnit;
            }

            // Make an array with requested ingredients
            $requestedShoppingList = [];
            for ($i = 0; $i < count($ingredientsRequestList); $i++) {

                $newIngredientId     = intval($ingredientsRequestList[$i]->id);
                $newIngredientName   = $ingredientsRequestList[$i]->name;
                $newIngredientAmount = $ingredientsRequestList[$i]->amount;
                $newIngredientUnit   = $ingredientsRequestList[$i]->unit;

                $requestedShoppingList[$i]['id']     = $newIngredientId;
                $requestedShoppingList[$i]['name']   = $newIngredientName;
                $requestedShoppingList[$i]['amount'] = $newIngredientAmount;
                $requestedShoppingList[$i]['unit']   = $newIngredientUnit;
            }

            // Merge arrays & build new one
            $mergedShoppingList = array_merge($currentShoppingList, $requestedShoppingList);
            $finalShoppingList = array();
            foreach ($mergedShoppingList as $unique) {
                $key = $unique['id'];

                // Merge duplicates and increase amounts
                if (isset($finalShoppingList[$key])) {
                    if ($finalShoppingList[$key]['id'] === $unique['id']) {
                        $finalShoppingList[$key]['amount'] += $unique['amount'];
                    }
                } else {
                    $finalShoppingList[$key] = $unique;
                }
            }

            // Clean the original list
            foreach ($currentList as $cleanIngredient) {
                $entityManager->remove($cleanIngredient);
            }

            // Check for unknow ingredients
            foreach ($finalShoppingList as $pouet) {

                $ingredient = $entityManager->getRepository(Ingredient::class)->findOneBy(['id' => $pouet['id']]);
   
                if (!$ingredient) {
                    $newIngredient = new Ingredient;
                    $newIngredient->setId($pouet['id']);
                    $newIngredient->setName($pouet['name']);
                    $entityManager->persist($newIngredient);
                    $entityManager->flush();            
                }
            }

            foreach ($finalShoppingList as $final) {

                $finalIngredient = $entityManager->getRepository(Ingredient::class)->findOneBy(['id' => $final['id']]);

                $newShoppingList = new ShoppingListIngredient;
                $newShoppingList
                    ->setShoppingList($shoppingList)
                    ->setIngredient($finalIngredient)
                    ->setAmount($final['amount'])
                    ->setUnit($final['unit']);
                $entityManager->persist($newShoppingList);
                $entityManager->flush();
            }

            $entityManager->persist($shoppingList);
            $entityManager->flush();

            $shoppingListTitle = $shoppingList->getTitle();

            return $this->json([
                'shoppingListTitle' => $shoppingListTitle,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        }
    }

    /**
     * @Route("/shopping-list-remove/{id}", name="user_shopping_list_remove")
     */
    public function userShoppingListRemove(Request $request, SerializerInterface $serializer, ShoppingList $shoppingList)
    {
        if ($request->isMethod('POST')) {
            $data  = $request->getContent();
            $data  = json_decode($data);
            $token = $data->token;

            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(['apiToken' => $token]);

            $errors = [];
            if (!$user) {
                $errors[] = "Unknown user";
            }

            $entityManager->remove($shoppingList);
            $entityManager->flush();

            $shoppingList = $shoppingList->getTitle();

            return $this->json([
                'shoppingList' => $shoppingList,
                'firstname'    => $user->getFirstname(),
                'lastname'     => $user->getLastname(),
                'email'        => $user->getEmail(),
                'avatar'       => $user->getAvatar(),
                'resultat'     => true,
            ]);
        }
    }
}