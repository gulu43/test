let mainContVal = document.querySelector('#mainValCont');

// call api 

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    // data
    data.forEach(ele => {
    mainContVal.innerHTML='';
    mainContVal.innerHTML +=`
    <tr class="row">
        
        <td class="first_col">
            <div class="img_div">
                <img class="img" src="${ele.image}" alt="img">
            </div>
            <div class="Comply_name">
            ${ele.name}
            </div>
        </td>

       
        <td class="sec_3l">
            <div class="_2_txt">${ele.symbol}</div>
        </td>

        
        <td class="third_one_share">
            <div class="_3col_dol">$ </div>
            <div class="_3val">${ele.current_price}</div>
        </td>

        
        <td class="forth_big_numbers">
            <div class="_4col_dol">$</div>
            <div class="_4val">${ele.market_cap}</div>
        </td>

        
        <td class="Fif_per">
            <div class="per_number">${ele.price_change_percentage_24h}</div>
            <div class="per_bak">%</div>
        </td>

        
        <td class="mkt_cont">
            <div class="mkt_first_part">Mkt Cap : </div>
            <div class="mkt_values">${ele.total_supply}</div>
        </td>
    </tr><br/>

    `
        
    });
})