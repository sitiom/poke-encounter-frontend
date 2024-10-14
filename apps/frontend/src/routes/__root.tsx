import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import logo from "../assets/logo.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { CaughtPokemonInfo } from "../types";
import { Anchor } from "@mantine/core";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => {
      const [parent] = useAutoAnimate();
      const router = useRouterState();
      const { data: caughtPokemon } = useSuspenseQuery<CaughtPokemonInfo[]>({
        queryKey: ["caughtPokemon"],
        queryFn: async () => {
          const { data } = await axios.get<CaughtPokemonInfo[]>(
            "http://localhost:3000/caught-pokemon",
          );
          return data;
        },
      });

      return (
        <>
          <Link to="/">
            <header className="mt-8 flex flex-col items-center">
              <img src={logo} alt="logo" className="w-52" />
              <div className="text-xl font-semibold">Battle Simulator</div>
            </header>
          </Link>
          <div className="mb-8 flex justify-center">
            {router.location.href !== "/battle" &&
            router.location.href !== "/caught-pokemons" ? (
              <Link to="/caught-pokemons">
                <Anchor className="mx-auto text-lg">
                  Caught: {caughtPokemon.length}
                </Anchor>
              </Link>
            ) : (
              <div className="text-lg">Caught: {caughtPokemon.length}</div>
            )}
          </div>
          <div className="container mx-auto px-8" ref={parent}>
            <Outlet />
          </div>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </>
      );
    },
    loader: async ({ context: { queryClient } }) => {
      queryClient.ensureQueryData({
        queryKey: ["caughtPokemon"],
        queryFn: async () => {
          const { data } = await axios.get<CaughtPokemonInfo[]>(
            "http://localhost:3000/caught-pokemon",
          );
          return data;
        },
      });
    },
  },
);
