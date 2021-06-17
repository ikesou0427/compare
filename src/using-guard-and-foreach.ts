// 初期値あり、 番兵あり
export function compare1(arr: Array<{id: string, value: number}>) {
    if (arr.length === 0) {
        return;
    }

    // 番兵
    arr.push({id: "", value: 0});

    let id = arr[0].id;
    let total = 0;
    
    let output = "";
    output += "ID: " + id + "\n";

    for (const row of arr) {
        if (row.id === id) {
            total += row.value;
        } 
        else if(row.id === "") {
            output +=  ("値: " + total + "\n");
            break;
        }
        else {
            // 合計値の出力
            output += ("値: " + total + "\n");
            
            // 次のIDの準備とIDの出力
            id = row.id;
            total = row.value;
            output += ("ID: " + id + "\n");
        }
    }

    return output;
}