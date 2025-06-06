let skils: String[]=[ 'bash', 'couter', 'fire'];
interface Character {
    name: string;
    hpPoints: number | 'Full';
    skils: String[];
    hometown?: string; // Optional property
}

const Harry:Character = {
    name: 'Harry',
    hpPoints: 'Full',
    skils:[ 'bash', 'couter', 'fire'],
}
Harry.hometown = 'Hogwarts'; // Optional property can be added later

console.table(Harry);

export{};