import getData from "./lib/service.js";

(async () => {
    const result = await getData(1);
    console.log(result);
})();
