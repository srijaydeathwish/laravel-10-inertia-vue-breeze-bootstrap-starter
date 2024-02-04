<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Slations\DirectusSdk\Directus;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(Directus::class, function ($app) {
            $directus = new Directus($app['config']['services']['directus']['url'],'');
            $directus->auth_token($app['config']['services']['directus']['token']);
            return $directus;
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
