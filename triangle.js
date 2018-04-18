


function draw(_a,_b,_c){

    if(_a>=0){

        let _arr = [];
        _b = _b == undefined ? []:_b;
        
        for(let i = 0 ;i <= _b.length;i++)
            if(i==0 || i== _b.length)
                _arr.push(1);
            else
            _arr.push(_b[i-1]+_b[i] );
        
        let _sum =0;
        for(let i =0;i<_arr.length;i++)
            _sum+=_arr[i];
        console.log(_arr+' :'+_sum);
        draw(_a-1, _arr);
    }
}


draw(9);