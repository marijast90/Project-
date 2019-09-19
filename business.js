function BusinessLayer() {
    this.dataObject = new DataLayer();

    this.resolveFoodData = async (query) => {
        // console.log("Bussines: " + query);
        await this.dataObject.populateReceipeData(query);
        var data = this.dataObject.getFoodApiData1(query);

        console.log(data);

        var finalInfo = [];
        var titles = [];
        var imgSrc = [];
        var readyInMinutesAr = [];
        var servingsAr = [];
        for (var i = 0; i < data.results.length; i++) {
            // titles.push(data.results[i].title);
            // imgSrc.push(data.results[i].image);
            // readyInMinutesAr.push(data.results[i].readyInMinutes);
            // servingsAr.push(data.results[i].servings);
            var tempObj = {
                title: data.results[i].title,
                // image: imgSrc,
                // readyInMinutes:readyInMinutesAr,
                // servingsInfo:serving
                id: data.results[i].id,
            }
            finalInfo.push(tempObj);
        }
        console.log(finalInfo);
        return finalInfo;

    }

    this.giveInfo = async (searchInfo) => {
         await this.dataObject.giveInfo(searchInfo);
         var data = this.dataObject.getReceipeDetails();
         
         return data;
    }

}
