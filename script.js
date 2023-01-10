"use strict";
(function () {
    console.log("ready!", $);
    const calculate = () => {
        const purchasedEl = $("input#purchased");
        const purchased = parseFloat(`${purchasedEl.val() || "0"}`);
        const profitEl = $("input#profit");
        const profit = parseFloat(`${profitEl.val() || "0"}`);
        const feeEl = $("input#fee");
        const fee = parseFloat(`${feeEl.val() || "0"}`);
        const priceEl = $("input#price");
        const price = parseFloat(`${priceEl.val() || "0"}`);
        const totalProfitEl = $("input#totalProfit");
        let totalProfit = parseFloat(`${totalProfitEl.val() || "0"}`);
        const initialProfit = purchased * (profit ? profit / 100 : 0);
        const initialSellingPrice = purchased + initialProfit;
        const sellingFee = initialSellingPrice * (fee ? fee / 100 : 0);
        const finalSellingPrice = initialSellingPrice + sellingFee;
        priceEl.val(finalSellingPrice.toFixed(2).replace(".00", ""));
        totalProfit = finalSellingPrice - purchased - sellingFee;
        totalProfitEl.val(totalProfit.toFixed(2).replace(".00", ""));
        console.log({
            finalSellingPrice,
            totalProfit,
            test: totalProfit.toFixed(2).replace(".00", "")
        });
    };
    $("#calculate").on("click", calculate);
    // $("input").on("keyup", calculate);
})($);