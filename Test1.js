let mainContVal = document.querySelector('#mainValCont');

// call api 
let global_data = [];
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    //passing for search
    global_data = data;

    // data
    mainContVal.innerHTML='';
    data.forEach(ele => {
        let colorClass_val = ele.price_change_percentage_24h >0 ? 'green_txt' : 'red_txt' ;
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
            <div class="per_number ${colorClass_val}">${ele.price_change_percentage_24h }</div>
            <div class="per_bak ${colorClass_val}">%</div>
        </td>

        
        <td class="mkt_cont">
            <div class="mkt_first_part">Mkt Cap : </div>
            <div class="mkt_values">${ele.total_supply}</div>
        </td>
    </tr>
    <br/>
    `
        
    });
})

let search_val = document.querySelector('#search');
search_val.addEventListener('keydown',helper);

function helper(e) {
    if (e.key === 'Enter') {
        let val = search_val.value.toLowerCase().trim();
        // console.log(val);
        
        let filtered_obj = global_data.filter((ele)=>{
            return ele.name.toLowerCase() == val ||  ele.symbol.toLowerCase() == val;
        })
        // console.log(filtered_obj);
        mainContVal.innerHTML='';
        filtered_obj.forEach(ele => {
            let colorClass_val = ele.price_change_percentage_24h >0 ? 'green_txt' : 'red_txt' ;

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
                    <div class="per_number ${colorClass_val} ">${ele.price_change_percentage_24h}</div>
                    <div class="per_bak ${colorClass_val}">%</div>
                </td>
        
                
                <td class="mkt_cont">
                    <div class="mkt_first_part">Mkt Cap : </div>
                    <div class="mkt_values">${ele.total_supply}</div>
                </td>
            </tr>
            
            `
                
            });

        
    }
}
// btn
let mkt_btn_var = document.querySelector('#mkt_btn');
mkt_btn_var.addEventListener('click',()=>{
    let soreted_data = [...global_data].sort( (global_data1,global_data2 )=>{
        return global_data1.total_supply  - global_data2.total_supply ;
    })
    mainContVal.innerHTML='';
    soreted_data.forEach((ele)=>{
        let colorClass_val = ele.price_change_percentage_24h >0 ? 'green_txt' : 'red_txt' ;

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
                 <div class="per_number ${colorClass_val}">${ele.price_change_percentage_24h}</div>
                 <div class="per_bak ${colorClass_val}">%</div>
             </td>
     
             
             <td class="mkt_cont">
                 <div class="mkt_first_part">Mkt Cap : </div>
                 <div class="mkt_values">${ele.total_supply}</div>
             </td>
         </tr>
         
         `

    })
})

let per_btn_var = document.querySelector('#per_btn');
per_btn_var.addEventListener('click',()=>{
    let soreted_data = [...global_data].sort( (global_data1,global_data2 )=>{
        return global_data2.price_change_percentage_24h  - global_data1.price_change_percentage_24h ;
    })
    
    mainContVal.innerHTML='';
    soreted_data.forEach((ele)=>{
         let colorClass_val = ele.price_change_percentage_24h >0 ? 'green_txt' : 'red_txt' ;
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
                 <div class="per_number ${colorClass_val}" >${ele.price_change_percentage_24h}</div>
                 <div class="per_bak ${colorClass_val}">%</div>
             </td>
     
             
             <td class="mkt_cont">
                 <div class="mkt_first_part">Mkt Cap : </div>
                 <div class="mkt_values">${ele.total_supply}</div>
             </td>
         </tr>
         
         `

    })
})


// just for resvisiion and in jest it had 5marks so..

// async function api() {
    setTimeout( async() =>{
        let api = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    let json_data = await api.json();
    console.log(json_data);
    },3000);
// }
