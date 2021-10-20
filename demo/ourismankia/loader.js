!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";window.DDC=window.DDC||{};window.DDC.APILoader=class n{isReady(){return new Promise((n=>{window.DDC.API?n(!0):window.addEventListener("WIAPIReady",(()=>n(!0)))}))}static async create(e="test-integration"){const i=new n;return await i.isReady(),new window.DDC.API(e)}}}));
//# sourceMappingURL=loader.js.map
