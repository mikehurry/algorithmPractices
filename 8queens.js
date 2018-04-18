 let size = 9;
 let a=new Array(size),
    b=new Array(size),
    c=new Array(size*2),
    d=new Array(size*2);

let _r_c =0;


 function get_position_of_current_line(_l)
 {
    for(var i=0;i<size;i++)
    {
        if(a[i]!=true & 
            b[_l]!=true&
            c[_l+i]!=true&
            d[_l-i]!=true)
        {
            a[i]=b[_l]=c[_l+i]=d[_l-i]=true;
            
            if(_l+1==size)
            {
                _r_c++;
            }
            else 
                get_position_of_current_line(_l+1);
            
            a[i]=b[_l]=c[_l+i]=d[_l-i]=false;
        }
    }
 }

get_position_of_current_line(0);

 console.log(_r_c);