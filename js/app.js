function update(){  
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')
        .then(res => {
            if(res.ok){
                return res.json()
            }
            return Promise.reject(err)
        })
        .then(data => {
            const bitcoin = data.find(coin => coin.id === 'bitcoin');
                if(bitcoin){
                document.querySelector('#rank1').innerHTML=`${bitcoin.market_cap_rank}`
                document.querySelector('#name1').innerHTML=`${bitcoin.name}`
                document.querySelector('#price1').innerHTML=`${bitcoin.current_price.toLocaleString()}`
                document.querySelector('#cap1').innerHTML=`${bitcoin.market_cap.toLocaleString()}`
                document.querySelector('#h-24-1').innerHTML=`${bitcoin.price_change_percentage_24h}%`

                if(bitcoin.price_change_percentage_24h < 0){
                    document.querySelector('#h-24-1').style.color = 'red'
                }
                else{
                    document.querySelector('#h-24-1').style.color = '#7BF700'
                }
            }

            const eth = data.find(coin => coin.id === 'ethereum');
            if(eth){
            document.querySelector('#rank2').innerHTML=`${eth.market_cap_rank}`
            document.querySelector('#name2').innerHTML=`${eth.name}`
            document.querySelector('#price2').innerHTML=`${eth.current_price.toLocaleString()}`
            document.querySelector('#cap2').innerHTML=`${eth.market_cap.toLocaleString()}`
            document.querySelector('#h-24-2').innerHTML=`${eth.price_change_percentage_24h}%`

            if(eth.price_change_percentage_24h < 0){
                document.querySelector('#h-24-2').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-2').style.color = '#7BF700'
            }
            }

            const tether = data.find(coin => coin.id === 'tether');
            if(tether){
            document.querySelector('#rank3').innerHTML=`${tether.market_cap_rank}`
            document.querySelector('#name3').innerHTML=`${tether.name}`
            document.querySelector('#price3').innerHTML=`${tether.current_price}`
            document.querySelector('#cap3').innerHTML=`${tether.market_cap.toLocaleString()}`
            document.querySelector('#h-24-3').innerHTML=`${tether.price_change_percentage_24h}%`

            if(tether.price_change_percentage_24h < 0){
                document.querySelector('#h-24-3').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-3').style.color = '#7BF700'
            }
            }

            const bnb = data.find(coin => coin.id === 'binancecoin');
            if(bnb){
            document.querySelector('#rank4').innerHTML=`${bnb.market_cap_rank}`
            document.querySelector('#name4').innerHTML=`${bnb.name}`
            document.querySelector('#price4').innerHTML=`${bnb.current_price}`
            document.querySelector('#cap4').innerHTML=`${bnb.market_cap.toLocaleString()}`
            document.querySelector('#h-24-4').innerHTML=`${bnb.price_change_percentage_24h}%`
            
            if(bnb.price_change_percentage_24h < 0){
                document.querySelector('#h-24-4').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-4').style.color = '#7BF700'
            }
            }

            const sol = data.find(coin => coin.id === 'solana');
            if(sol){
            document.querySelector('#rank5').innerHTML=`${sol.market_cap_rank}`
            document.querySelector('#name5').innerHTML=`${sol.name}`
            document.querySelector('#price5').innerHTML=`${sol.current_price}`
            document.querySelector('#cap5').innerHTML=`${sol.market_cap.toLocaleString()}`
            document.querySelector('#h-24-5').innerHTML=`${sol.price_change_percentage_24h}%`

            if(sol.price_change_percentage_24h < 0){
                document.querySelector('#h-24-5').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-5').style.color = '#7BF700'
            }
            }

            const usd = data.find(coin => coin.id === 'usd-coin');
            if(usd){
            document.querySelector('#rank6').innerHTML=`${usd.market_cap_rank}`
            document.querySelector('#name6').innerHTML=`${usd.name}`
            document.querySelector('#price6').innerHTML=`${usd.current_price}`
            document.querySelector('#cap6').innerHTML=`${usd.market_cap.toLocaleString()}`
            document.querySelector('#h-24-6').innerHTML=`${usd.price_change_percentage_24h}%`

            if(usd.price_change_percentage_24h < 0){
                document.querySelector('#h-24-6').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-6').style.color = '#7BF700'
            }
            }

            const xrp = data.find(coin => coin.id === 'ripple');
            if(xrp){
            document.querySelector('#rank7').innerHTML=`${xrp.market_cap_rank}`
            document.querySelector('#name7').innerHTML=`${xrp.name}`
            document.querySelector('#price7').innerHTML=`${xrp.current_price}`
            document.querySelector('#cap7').innerHTML=`${xrp.market_cap.toLocaleString()}`
            document.querySelector('#h-24-7').innerHTML=`${xrp.price_change_percentage_24h}%`

            if(xrp.price_change_percentage_24h < 0){
                document.querySelector('#h-24-7').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-7').style.color = '#7BF700'
            }
            }

            const staked = data.find(coin => coin.id === 'staked-ether');
            if(staked){
            document.querySelector('#rank8').innerHTML=`${staked.market_cap_rank}`
            document.querySelector('#name8').innerHTML=`${staked.name}`
            document.querySelector('#price8').innerHTML=`${staked.current_price.toLocaleString()}`
            document.querySelector('#cap8').innerHTML=`${staked.market_cap.toLocaleString()}`
            document.querySelector('#h-24-8').innerHTML=`${staked.price_change_percentage_24h}%`

            if(staked.price_change_percentage_24h < 0){
                document.querySelector('#h-24-8').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-8').style.color = '#7BF700'
            }
            }

            const ton = data.find(coin => coin.id === 'the-open-network');
            if(ton){
            document.querySelector('#rank9').innerHTML=`${ton.market_cap_rank}`
            document.querySelector('#name9').innerHTML=`${ton.name}`
            document.querySelector('#price9').innerHTML=`${ton.current_price}`
            document.querySelector('#cap9').innerHTML=`${ton.market_cap.toLocaleString()}`
            document.querySelector('#h-24-9').innerHTML=`${ton.price_change_percentage_24h}%`

            if(ton.price_change_percentage_24h < 0){
                document.querySelector('#h-24-9').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-9').style.color = '#7BF700'
            }
            }

            const doge = data.find(coin => coin.id === 'dogecoin');
            if(doge){
            document.querySelector('#rank10').innerHTML=`${doge.market_cap_rank}`
            document.querySelector('#name10').innerHTML=`${doge.name}`
            document.querySelector('#price10').innerHTML=`${doge.current_price}`
            document.querySelector('#cap10').innerHTML=`${doge.market_cap.toLocaleString()}`
            document.querySelector('#h-24-10').innerHTML=`${doge.price_change_percentage_24h}%`

            if(doge.price_change_percentage_24h < 0){
                document.querySelector('#h-24-10').style.color = 'red'
            }
            else{
                document.querySelector('#h-24-10').style.color = '#7BF700'
            }
            }
        })        
        .catch(err => console.error(err))
    }
    setInterval(() => {
        update()
    }, 30000);
    
    update()
