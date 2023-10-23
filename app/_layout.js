// import { Tabs } from 'expo-router/tabs';
// export default function AppLayout() {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         // Name of the dynamic route.
//         name="[user]"
//         options={{
//           // Ensure the tab always links to the same href.
//           href: '/evanbacon',
//           // OR you can use the Href object:
//           href: {
//             pathname: '/[user]',
//             params: {
//               user: 'evanbacon',
//             },
//           },
//         }}
//       />
//     </Tabs>
//   );
// }



import { Stack } from "expo-router";

const StackLayout =()=>{
    return(
        <Stack >
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
            <Stack.Screen name="bills"/>

        </Stack>
    )
};
 export default StackLayout;