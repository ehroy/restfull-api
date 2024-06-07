<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->header("Authorization");
        $authentication = true;
        if(!$token){
            $authentication = false;
        }
        $user = User::where("remember_token",$token )->first();
        if(!$user){
            $authentication = false;
        }
        if($authentication){
            return $next($request);
            
        }else{
            return response([
                'errors'=>[
                    'message' => [
                        'unauthorized'
                    ]
                ]

            ],401);
        }
    }
}
