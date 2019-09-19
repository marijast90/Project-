
 async function main() {
    var data = new BusinessLayer();
    data.resolveFoodData();
    // data.giveInfo();
  

    var presentation = new Presentation();
    presentation.displayReceipe();
    // presentation.checkData(116679)

}

main();

