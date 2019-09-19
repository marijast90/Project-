
function DataLayer() {
    this.foodApiData = {};
    this.receipeDetails = {};
    this.persistanceObject = new FoodApi();

    this.populateReceipeData = async (query) => {
        //var query = "hjhi";
        this.foodApiData = await this.persistanceObject.getFoodApiData(query);
    };

    this.getFoodApiData1 = (query) => {
        return this.foodApiData;
    };

    this.giveInfo = async (searchInfo) => {
        this.receipeDetails =   await this.persistanceObject.RecipeInfo(searchInfo);
    }

    this.getReceipeDetails = () => {
        return this.receipeDetails;
    }
  


}


