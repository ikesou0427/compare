interface Bucket {
    [key: string]: number;
}

// bucketソートを活用して処理
export function compare4(arr: Array<{id: string, value: number}>): string {
    if (arr.length === 0) {
        return "";
    }

    const bucket = {} as Bucket;
    for (const row of arr) {
        bucket[row.id] = bucket.hasOwnProperty(row.id) ? bucket[row.id] + row.value : row.value;
    }

    let output = "";
    for (const [row, value] of Object.entries(bucket)) {
        output += "ID: " + row + "\n";
        output += "値: " + value + "\n";;
    }

    return output;
}

