// namespaces: ранее - "внутренние модули"
// ниже - строка импорта:
/// <reference path="glasses-namespace.ts"/>
namespace Glasses {
    function orderGlasses(frame: Frame, lenses: Lenses): Glasses{
        return {frame, lenses};
    }
    const gl = orderGlasses(
        {color:'red', bridge:5519},
        {brand:'Zeiss', left:-2, right:-2})
    console.log(gl);
}

// А это уже без экспортов-импортов - всё рядом
// 1. Объявление модуля:
namespace Faka {
    export type Fucker = 'fucker';
    export type Mazza = {
        name: string
    }
}

// 2. Исполнение его сущностей в его пространстве:
namespace Faka {
    const f:Fucker = 'fucker';
    const m:Mazza = {name: 'blackMazza'};
    console.log(f,m);
}