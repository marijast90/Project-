function FoodApi() {
    this.getFoodApiData = (query) => {
        // console.log("test123: " + query)
        return new Promise((resolve, reject) => {
            $.ajax({
                url:
                    "https://api.spoonacular.com/recipes/search?apiKey=5384c6ed611d41a7b0bcdcfbead4caed&query=cheese&number=100",
                type: "GET",
                success: function (response) {
                    resolve(response);
                },
                error: function (error) {
                    reject(error);
                }
            })

        })
    }


    this.RecipeInfo = (id) => {
        // console.log("test123: " + query)
        return new Promise((resolve, reject) => {
            $.ajax({
                url:
                    "https://api.spoonacular.com/recipes/" + id + "/information?apiKey=5384c6ed611d41a7b0bcdcfbead4caed",
                type: "GET",
                success: function (response) {
                    resolve(response);
                },
                error: function (error) {
                    reject(error);
                }
            })

        })
    }
}
