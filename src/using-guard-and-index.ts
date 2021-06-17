// 最後の値が使われないことを利用、番兵
export function compare3(arr: Array<{id: string, value: number}>) {
    if (arr.length === 0) {
        return;
    }

    // 番兵
    arr.push({id: "", value: 0});

    let id = arr[0].id;
    let total = 0;
    
    let output = "";

    for (let i = 0;i < arr.length;i++) {
        const row = arr[i];

        if (row.id === id) {
            total += row.value;
        } else {
            // IDの出力
            output += ("ID: " + id + "\n");
            output += ("値: " + total + "\n");
            
            // 次の準備をする
            total = 0;
            id = row.id;
            
            // もう一週
            i--;
        }
    }

    return output;
}