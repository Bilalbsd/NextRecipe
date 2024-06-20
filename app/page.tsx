"use client";

import { IRecipe, IRecipeReduced } from "@/types";
import { useEffect, useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  const [recipes, setRecipes] = useState<IRecipeReduced[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes/all");
        const data = await response.json();
        const recipesReduced: IRecipeReduced[] = data.map(
          (recipe: IRecipe) => ({
            value: recipe.name.toLowerCase().replace(/ /g, "-"),
            label: recipe.name,
          })
        );
        setRecipes(recipesReduced);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="container flex  justify-center align-center">
      {!isLoading ? (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? recipes.find((recipe) => recipe.value === value)?.label
                : "Select recipe..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search recipe..." />
              <CommandList>
                <CommandEmpty>No recipe found.</CommandEmpty>
                <CommandGroup>
                  {recipes.map((recipe) => (
                    <CommandItem
                      key={recipe.value}
                      value={recipe.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === recipe.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {recipe.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="">
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
}
