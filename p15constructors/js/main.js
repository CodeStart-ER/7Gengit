var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]
        //arrayKoder = arr

function koderObject(kodersMatrix) {
    var rv = {};
    for (var i = 0; i < kodersMatrix.length; ++i)
      rv[i] = kodersMatrix[i];
    return rv;
  }