import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPageWithLayout } from "./_app";
import MainHeading from "./MainHeading";
import { ReactElement } from "react";
import HomePage from "./HomePage";
import Layout from "@/components/Layout";

const Home:NextPageWithLayout = () => {
  return (
    <>            
        <HomePage />
        <ReactQueryDevtools />      
    </>
  );
}

export default Home;
Home.getLayout = function getLayout(page:ReactElement){
  return <Layout>
    {page}
  </Layout>
}

// Only Use This If you Don't Use ANY HEAVY API
// export async function getStaticProps() {
//   const response = await fetch(`${process.env.BASE_FETCH_URL}/api/fetchGames`);
//   if (response.ok) {
//     const data = await response.json();
//     const fetchedGames = [];
//     for (var game in data) {
//       fetchedGames.push({
//         ...data[game],
//       });
//     }
//     return {
//       props: {
//         fetchedGames,
//       },
//       revalidate:40
//     };
//   }
//   return { props: { message: "Failed" } };
// }
