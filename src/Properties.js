// Css Properties => https://www.tutorialrepublic.com/css-reference/css3-properties.php
const PropertyTypes = {
    'time': {
        value: '#{n}s',
        valueRange: [-5, 5],
        valueStep: 0.1,
    },
    'count': {
        value: '#{n}',
        valueRange: [1, 10],
        valueStep: 1,
        additialValues: ['infinite']
    },
    'string': {
        additialValues: ['initial', 'inherit']
    }
};

const Animation = {
    'animation-delay': {
        prefix: true,
        valueType: 'time',
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    },
    'animation-direction': {
        prefix: true,
        valueType: 'string',
        valueLists: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    },
    'animation-duration': {
        prefix: true,
        valueType: 'time',
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    },
    'animation-fill-mode': {
        prefix: true,
        valueType: 'string',
        valueLists: ['none', 'forwards', 'backwards', 'both'],
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    },
    'animation-iteration-count': {
        prefix: true,
        valueType: 'count',
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    },
    /**
     * css 전체 뒤져서 이름 찾은 후 생성?
     */
    'animation-name': {
        prefix: true,
        valueType: 'custom',
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    },
    'animation-play-state': {
        prefix: true,
        valueType: 'string',
        valueLists: ['paused', 'running'],
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    },
    'animation-timing-function': {
        prefix: true,
        valueType: 'string',
        valueLists: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(n,n,n,n)'],
        compatibility: {
            'firefox': 15,
            'chrome': 4,
            'ie': 10,
            'safari': 4,
            'opera': 15
        }
    }
}

const Background = {
    'background-attachment': {
        prefix: false,
        valueType: 'string',
        valueLists: ['scroll', 'fixed'],
        compatibility: {
            'firefox': 1,
            'chrome': 1,
            'ie': 4,
            'safari': 1,
            'opera': 3.5
        }
    },
    'background-clip': {
        prefix: true,
        valueType: 'string',
        valueLists: ['border-box', 'padding-box', 'content-box'],
        compatibility: {
            'firefox': 4,
            'chrome': 4,
            'ie': 9,
            'safari': 3,
            'opera': 10.5
        }
    },
    'background-color': {
        prefix: false,
        valueType: 'colors',
        compatibility: {
            'firefox': 1,
            'chrome': 1,
            'ie': 4,
            'safari': 1,
            'opera': 3.5
        }
    },
    'background-image': {
        prefix: false,
        valueType: 'file',
        compatibility: {
            'firefox': 1,
            'chrome': 1,
            'ie': 4,
            'safari': 1,
            'opera': 3.5
        }
    },
    'background-origin': {
        prefix: true,
        valueType: 'string',
        valueLists: ['border-box', 'padding-box', 'content-box'],
        compatibility: {
            'firefox': 4,
            'chrome': 4,
            'ie': 9,
            'safari': 3,
            'opera': 10.5
        }
    },
    'background-position': {
        prefix: false,
        valueType: 'percentage, unit, string',
        valueLists: ['left', 'center', 'right'],
        compatibility: {
            'firefox': 1,
            'chrome': 1,
            'ie': 4,
            'safari': 1,
            'opera': 3.5
        }
    }
}


const Properties = {
    
}
