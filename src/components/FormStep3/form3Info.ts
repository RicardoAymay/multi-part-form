export interface iForm3id {
    id: "online" | "storage" | "customProfile"
}
export interface iForm3Info extends iForm3id {
    title: "Online service" | "Larger storage" | "Customizable profile";
    subtitle: string;
    monthPrice: number;
    yearPrice: number;
}




export const form3Info: iForm3Info[] = [
{
    id: "online",
    title: "Online service",
    subtitle: "Access to multiplayer games",
    monthPrice: 1,
    yearPrice: 10
},
{
    id: "storage",
    title: "Larger storage",
    subtitle:"Extra 1TB of cloud save",
    monthPrice: 2,
    yearPrice: 20
},
{
   id:"customProfile", 
   title: "Customizable profile",
   subtitle: "Custom theme on your profile",
   monthPrice: 2,
   yearPrice: 20
}
]