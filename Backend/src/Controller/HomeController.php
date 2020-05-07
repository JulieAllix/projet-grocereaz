<?php

namespace App\Controller;

use App\Entity\Ingredient;
use App\Entity\User;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Storage;


/**
 * @Route("/api")
 */
class HomeController extends AbstractController
{
    private $apiKey;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    /**
     * @Route("/home", name="home_page")
     */
    public function homePage(Request $request)
    {
        $client = HttpClient::create();

        $response = $client->request(
            'GET',
            "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&apiKey=$this->apiKey",
            [
                'headers' => [
                    'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                    'X-RapidAPI-Key' => "$this->apiKey"
                ]
            ]
        );

        if ($response) {
            $content = $response->toArray();
            $idRecipe = [];
            foreach ($content['recipes'] as $value) {
                $idRecipe[] = $value['id'];
            }
            $string = json_encode($idRecipe,);
            $string = trim($string, '[]');
            $response = $client->request(
                'GET',
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=$string&apiKey=$this->apiKey",
                [
                    'headers' => [
                        'X-RapidAPI-Host' => 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                        'X-RapidAPI-Key' => "$this->apiKey"
                    ]
                ]
            );
            $content = $response->toArray();
            return new JsonResponse([
                $content,
            ]);
        }
        return new  JsonResponse([
            'resultat' => false
        ]);
    }

    /**
     * @Route("/download-api-ingredients")
     */
    public function downloadApiIngredients()
    {
        // Get data from Spoonacular
        $url = 'https://spoonacular.com/application/frontend/downloads/top-1k-ingredients.csv';

        // Create associative array with data
        $content = file_get_contents($url);
        file_put_contents(
            'top-1k-ingredients.csv',
            $content
        );
        $chunks = array_chunk(preg_split('/(;|\n)/', $content), 2);
        $result = array_combine(array_column($chunks, 0), array_column($chunks, 1));

        $entityManager = $this->getDoctrine()->getManager();

        // Get id of db's ingredients to compare
        $myIngredients = $entityManager->getRepository(Ingredient::class)->findAll();

        // Current ingredients list
        /*$myList = [];
        for ($i = 0; $i < count($myIngredients); $i++) {
            $myIds = (string) $myIngredients[$i]->getId();
            $myNames = $myIngredients[$i]->getName();
            $myList[$i]['id'] = $myIds;
            $myList[$i]['name'] = $myNames;
        }
        // New ingredients list
        $newList = [];
        $i = 0;
        foreach ($result as $row => $value) {
            $createIngredient = new Ingredient();
                $createIngredient->setId($id);
                $createIngredient->setName($key);
                $entityManager->persist($createIngredient);
            $newList[$i]["id"] = $value;
            $newList[$i]["name"] = $row;
            $i++;
        }
        
        // Compare all values by a json_encode
        $diff = array_diff(array_map('json_encode', $myList), array_map('json_encode', $newList));
        dump($newList);*/

        //$entityManager->flush();

        return $this->json([
            //'newIngredient' => $createIngredient,
            'resultat'     => true
        ]);
    }
}
