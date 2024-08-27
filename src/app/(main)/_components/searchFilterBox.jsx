import HomePageSearchFilterForm from "@/components/forms/homePageSearchFilterForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarFront, SearchIcon } from "lucide-react";
import React from "react";

const SearchFilterBox = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <span className="text-orange-400">Identifiez</span> votre véhicule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="car">
            <TabsList className="w-full grid grid-cols-2 gap-4">
              <TabsTrigger value="car">
                <CarFront />
              </TabsTrigger>
              <TabsTrigger value="reference">
                <span>Reference</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="car">
              <HomePageSearchFilterForm />
            </TabsContent>
            <TabsContent value="reference">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Example: 9643777980, 0265216..."
                />
                <Button type="submit">
                  <SearchIcon />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default SearchFilterBox;
