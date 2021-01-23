const ids = new Set([1,2,3]);
console.log(ids);

for(const entry of ids.entries()){
    console.log(entry);
}

for(const entry of ids.entries()){
    console.log(entry[0]);
}

ids.add(2);
console.log(ids);
ids.add(4);
console.log(ids);
ids.delete(3);
console.log(ids);

////////////////////////////////////////////////////////////////////

// WEAK SET