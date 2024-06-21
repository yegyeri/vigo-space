export function contains(arr:[], elem:Object) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
  }

export function TotalSum(arr:[]){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let totalNum = 0
    arr.forEach((num) => {
        totalNum += num
    })
}