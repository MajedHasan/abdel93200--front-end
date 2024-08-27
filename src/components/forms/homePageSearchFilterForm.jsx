"use client";

import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";

const HomePageSearchFilterForm = () => {
  const formSchema = z.object({
    search: z.string().min(1),
    brand: z
      .string()
      .min(2, {
        message: "Brand Name Must be at least 2 characters",
      })
      .max(50, {
        message: "Brand Name Must be max 50 characters",
      }),
  });

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      brand: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const brands = [
    {
      value: "audi",
    },
    {
      value: "honda",
    },
    {
      value: "toyota",
    },
  ];
  const models = [
    {
      value: "audi",
    },
    {
      value: "honda",
    },
    {
      value: "toyota",
    },
  ];
  const versions = [
    {
      value: "audi",
    },
    {
      value: "honda",
    },
    {
      value: "toyota",
    },
  ];

  const [popover1Open, setPopover1Open] = useState(false);
  const [popover1Value, setPopover1Value] = useState("");

  const [popover2Open, setPopover2Open] = useState(false);
  const [popover2Value, setPopover2Value] = useState("");

  const [popover3Open, setPopover3Open] = useState(false);
  const [popover3Value, setPopover3Value] = useState("");

  return (
    <FormProvider {...methods}>
      <form>
        <FormField
          name="search"
          render={({ field }) => (
            <FormItem className="flex gap-3">
              <FormLabel></FormLabel>
              <FormControl>
                <Input placeholder="XX-111-XX" {...field} />
              </FormControl>
              <Button>
                <Search />
              </Button>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Popover open={popover1Open} onOpenChange={setPopover1Open}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={popover1Open}
                      className="w-full justify-between"
                    >
                      {popover1Value
                        ? brands.find((brand) => brand.value === popover1Value)
                            ?.value
                        : "Select Brand"}
                      <ChevronsUpDown />
                      <Input type="hidden" {...field} value={popover1Value} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Command>
                      <CommandInput placeholder="Select Brand" />
                      <CommandList>
                        <CommandEmpty>No Brand Found</CommandEmpty>
                        <CommandGroup>
                          {brands.map((brand) => (
                            <CommandItem
                              key={brand.value}
                              value={brand.value}
                              onSelect={(currentvalue) => {
                                setPopover1Value(
                                  currentvalue === popover1Value
                                    ? ""
                                    : currentvalue
                                );
                                setPopover1Open(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  popover1Value === brand.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {brand.value}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="models"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Popover open={popover2Open} onOpenChange={setPopover2Open}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={popover2Open}
                      className="w-full justify-between"
                    >
                      {popover2Value
                        ? models.find((model) => model.value === popover2Value)
                            ?.value
                        : "Select Model"}
                      <ChevronsUpDown />
                      <Input type="hidden" {...field} value={popover2Value} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Command>
                      <CommandInput placeholder="Select Model" />
                      <CommandList>
                        <CommandEmpty>No Model Found</CommandEmpty>
                        <CommandGroup>
                          {models.map((model) => (
                            <CommandItem
                              key={model.value}
                              value={model.value}
                              onSelect={(currentvalue) => {
                                setPopover2Value(
                                  currentvalue === popover2Value
                                    ? ""
                                    : currentvalue
                                );
                                setPopover2Open(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  popover2Value === model.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {model.value}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="version"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <div className="flex gap-3">
                  <Popover open={popover3Open} onOpenChange={setPopover3Open}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={popover3Open}
                        className="w-full justify-between"
                      >
                        {popover3Value
                          ? versions.find(
                              (version) => version.value === popover3Value
                            )?.value
                          : "Select Version"}
                        <ChevronsUpDown />
                        <Input type="hidden" {...field} value={popover3Value} />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Command>
                        <CommandInput placeholder="Select Version" />
                        <CommandList>
                          <CommandEmpty>No Version Found</CommandEmpty>
                          <CommandGroup>
                            {versions.map((version) => (
                              <CommandItem
                                key={version.value}
                                value={version.value}
                                onSelect={(currentvalue) => {
                                  setPopover3Value(
                                    currentvalue === popover3Value
                                      ? ""
                                      : currentvalue
                                  );
                                  setPopover3Open(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    popover3Value === version.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {version.value}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <Button>
                    <Search />
                  </Button>
                </div>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  );
};

export default HomePageSearchFilterForm;
