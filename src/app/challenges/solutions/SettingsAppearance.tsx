"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import React, {
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { BiReset } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { IoMdCheckmarkCircle } from "react-icons/io";

export const SettingsAppearance = () => {
  return (
    <ThemeProvider>
      <SettingsAppearanceContent />
    </ThemeProvider>
  );
};

const SettingsAppearanceContent = () => {
  const { isLight, reset: resetTheme } = useTheme();
  const { toast } = useToast();
  return (
    <div
      className={cn(
        "flex-1 grid place-items-center p-8 |  rounded-xl | mb-6 relative overflow-clip",
        !isLight && "dark"
      )}
    >
      <Card className="w-full max-w-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="mb-2">Settings</CardTitle>
            <Button className="rounded-full size-8 p-0" variant="ghost">
              <CgClose />
            </Button>
          </div>
          <Separator />
        </CardHeader>
        <CardContent>
          <SettingsTab />
          <Separator className="mt-6" />
        </CardContent>
        <CardFooter className="gap-2">
          <Button
            className="flex items-center gap-2"
            variant="ghost"
            onClick={resetTheme}
          >
            <BiReset />
            reset to default
          </Button>
          <Button
            className="ml-auto"
            onClick={() => {
              toast({
                title: "Settings Cancel",
                description: "You have cancelled the settings",
              });
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              toast({
                title: "Save Preferences",
                description: "You preferences will be saved",
              });
            }}
          >
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const SettingsTab = () => {
  return (
    <Tabs defaultValue="appearance">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notification">Notification</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>
      <div className="pt-8">
        <TabsContent value="appearance" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Title>Language</Title>
              <Description>Select the language of application</Description>
            </div>
            <Select defaultValue="en">
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Select your language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4">
            <div>
              <Title>Interface theme</Title>
              <Description>Customize your application theme</Description>
            </div>
            <ThemeSelector />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <Title>Accent color</Title>
              <Description>Select your application accent color</Description>
            </div>
            <AccentSelector />
          </div>
        </TabsContent>
        <TabsContent value="profile" className="space-y-6 min-h-[21.3rem]">
          <div className="h-full grid place-items-center">
            <p>This feature is not yet implemented</p>
          </div>
        </TabsContent>
        <TabsContent value="notification" className="space-y-6 min-h-[21.3rem]">
          <div className="h-full grid place-items-center">
            <p>This feature is not yet implemented</p>
          </div>
        </TabsContent>
        <TabsContent value="account" className="space-y-6 min-h-[21.3rem]">
          <div className="h-full grid place-items-center">
            <p>This feature is not yet implemented</p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

const Title = ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) => {
  return <h2 {...props} className={cn("text-base font-medium", className)} />;
};

const Description = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...props} className={cn("text-sm text-muted-foreground", className)} />
  );
};

type Theme = "light" | "dark";
const ThemeSelector = () => {
  const { theme, toggleTheme, isLight } = useTheme();
  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={() => {
        toggleTheme();
      }}
      className="flex items-center justify-start gap-4 "
    >
      <ThemeToggleGroup value="light" selected={isLight} />
      <ThemeToggleGroup value="dark" selected={!isLight} />
    </ToggleGroup>
  );
};

const AccentSelector = () => {
  const { accent, setAccent } = useTheme();
  return (
    <ToggleGroup
      type="single"
      value={accent}
      onValueChange={(value) => {
        setAccent(value as AccentColors);
      }}
      className="flex items-center  gap-4"
    >
      {ACCENT_COLORS.map((color) => (
        <ToggleGroupItem
          key={color}
          value={color}
          className={cn(
            "relative h-auto p-0 size-5 rounded-full transition-all",
            accent === color && `ring-2 ring-offset-1 ring-${accent}`
          )}
        >
          <div className={cn("size-4 rounded-full", `bg-${color}`)} />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

const ThemeToggleGroup = ({
  value,
  selected,
}: {
  value: Theme;
  selected: boolean;
}) => {
  const { isLight, accent } = useTheme();

  return (
    <ToggleGroupItem
      className={cn(
        "relative h-auto p-0 flex-1 transition-colors",
        selected && `ring-2 ring-${accent}`
      )}
      value={value}
      aria-label="Toggle Light theme"
    >
      {selected && (
        <div
          className={cn(
            " rounded-full size-6 absolute -top-2 -right-2",
            isLight ? "bg-white" : "bg-black"
          )}
        >
          <IoMdCheckmarkCircle className={cn(`fill-${accent} size-6`)} />
        </div>
      )}
      <ThemeCard theme={value} />
    </ToggleGroupItem>
  );
};

const ThemeCard = ({ theme }: { theme: Theme }) => {
  return (
    <Card
      className={cn("flex-1", theme === "light" ? "bg-stone-200" : "bg-black")}
    >
      <CardHeader className="pb-2">
        <div className="flex gap-2">
          <div
            className={cn(
              "size-4   rounded-full",
              theme === "light" ? "bg-white" : "bg-gray-500"
            )}
          />
          <div
            className={cn(
              "h-4  rounded flex-1",
              theme === "light" ? "bg-white" : "bg-gray-500"
            )}
          />
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div
          className={cn(
            "h-8  rounded flex-1",
            theme === "light" ? "bg-white" : "bg-gray-500"
          )}
        />
      </CardContent>
      <CardFooter className="space-x-2">
        <div
          className={cn(
            "h-6 w-full rounded",
            theme === "light" ? "bg-white" : "bg-gray-500"
          )}
        />
        <div
          className={cn(
            "h-6 w-full rounded",
            theme === "light" ? "bg-white" : "bg-gray-500"
          )}
        />
      </CardFooter>
    </Card>
  );
};

const ACCENT_COLORS = [
  "violet-500",
  "green-400",
  "pink-500",
  "yellow-500",
] as const;

type AccentColors = (typeof ACCENT_COLORS)[number];

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isLight: boolean;
  accent: AccentColors;
  setAccent: (color: AccentColors) => void;
  reset: () => void;
}

const defaultValues: ThemeContextProps = {
  theme: "light",
  toggleTheme: () => {},
  isLight: true,
  accent: "green-400",
  setAccent: () => {},
  reset: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultValues);

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [accent, setAccent] = useState<AccentColors>("green-400");
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    if (isLight) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setIsLight(!isLight);
  };

  const reset = () => {
    setTheme("light");
    setIsLight(true);
    setAccent("green-400");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isLight, accent, setAccent, reset }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
