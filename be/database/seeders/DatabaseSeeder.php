<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\AddressSeeder;
use Database\Seeders\CategorySeeder;
use Database\Seeders\LevelSeeder;
use Database\Seeders\SkillSeeder;
use Database\Seeders\YearOfDateSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        AddressSeeder::run();
        CategorySeeder::run();
        LevelSeeder::run();
        SkillSeeder::run();
        YearOfDateSeeder::run();
        ExpSeeder::run();
        TypeSeeder::run();
    }
}
