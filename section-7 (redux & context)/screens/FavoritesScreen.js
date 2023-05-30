import { StyleSheet, Text, View } from "react-native";
// import { useContext } from "react";
// import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useDispatch, useSelector } from "react-redux";

const FavoritesScreen = () => {
  // With useContext()
  // const favoriteMealsCtx = useContext(FavoriteContext);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // );

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noFavText}>You have no favorite meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
