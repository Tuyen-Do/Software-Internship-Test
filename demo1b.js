let array = [ null , "hello" , null , "a" , null ];

function array_unique(array){
    array.sort();

    let max =[0,0];
    console.log(max)


    //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
    //So sánh số lần xuất hiện và thay đổi max khi cần.
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        console.log(i-1)
        
        
        if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        // console.log((array[i] == array[i-1]))
        else{
             //So sánh số lần xuất hiện với max[1] 
             if (max[1] < count){ 
                 console.log(max[0])
                 console.log( array[i])
                  //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max[1]
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}





//Tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript
array_unique(array);