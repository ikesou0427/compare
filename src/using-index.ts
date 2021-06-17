// 初期値あり、 番兵あり
export function compare2(arr: Array<{id: string, value: number}>) {
    if (arr.length === 0) {
        return;
    }

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

    // 一番最後のID分を出力
    output += ("ID: " + id + "\n");
    output += ("値: " + total + "\n");

    return output;
}