const TITLE = {
    name: 'title',
    config: {
        title: {
            text: 'This is a title',
            style: {
                textAlign: 'center',
                margin: 0
            }
        },
        subtitle: {
            text: 'This is a subtitle',
            style: {
                textAlign: 'center',
                margin: 0
            }
        },
        style: {
        }
    }
}

const TEXT = {
    name: 'text',
    config: {
        text: 'This is text',
        style: {
            textAlign: 'left'
        }
    }
}

const DIVIDER = {
    name: 'divider'
}

const BUTTON = {
    name: 'button',
    config: {
        buttons: [
            {
                text: 'Button',
                href: 'https://github.com/anduong96',
                style: {
                    backgroundColor: 'red'
                },
            }
        ],
        style:{
            textAlign: 'center',
        },
        limit: 5
    }
}

const IMAGE = {
    name: 'image',
    config: {
        src: 'https://imgplaceholder.com/600x200/a496ff/333333/fa-image',
        style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
        }
    }
}

const IMAGE_TEXT_RIGHT = {
    name: 'imageTextRight',
    config: {
        image: {
            src: 'https://imgplaceholder.com/300x200/a496ff/333333/fa-image',
            style: {
                paddingLeft: 5,
                margin: 0,
                width: '50%',
            }
        },
        descript: {
            text: 'Enter text',
            style: {
                width: '50%'
            }
        },
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const IMAGE_TEXT_LEFT = {
    name: 'imageTextLeft',
    config: {
        image: {
            src: 'https://imgplaceholder.com/300x200/a496ff/333333/fa-image',
            style: {
                paddingRight: 5,
                margin: 0,
                width: '50%'
            }
        },
        descript: {
            text: 'Enter text',
            style: {
                width: '50%'
            }
        },
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const DOUBLE_IMAGE_TEXT = {
    name: 'doubleImageText',
    config: {
        options: [
            {
                image: {
                    src: 'https://imgplaceholder.com/280x150/a496ff/333333/fa-image',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            },
            {
                image: {
                    src: 'https://imgplaceholder.com/280x150/a496ff/333333/fa-image',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            }
        ],
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const TRIPLE_IMAGE_TEXT = {
    name: 'tripleImageText',
    config: {


        options: [
            {
                image: {
                    src: 'https://imgplaceholder.com/180x100/a496ff/333333/fa-image',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            },
            {
                image: {
                    src: 'https://imgplaceholder.com/180x100/a496ff/333333/fa-image',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            },
            {
                image: {
                    src: 'https://imgplaceholder.com/180x100/a496ff/333333/fa-image',
                    style: {
                        padding: 5
                    }
                },
                descript: {
                    text: 'Enter text',
                    style: {
                    }
                }
            }
        ],
        style: {
            display: 'flex',
            padding: 10
        }
    }
}

const LOCATION = {
    name: 'location',
    config: {
        street: '0000 test',
        state: '',
        country: '',
        style: {
            textAlign: 'center'
        }
    }
}

const BLANK = {
    name: 'blank'
}


export const builder = {
    components: [
        TITLE,
        TEXT,
        IMAGE,
        DIVIDER,
        BUTTON,
        LOCATION,
        IMAGE_TEXT_RIGHT,
        IMAGE_TEXT_LEFT,
        DOUBLE_IMAGE_TEXT,
        TRIPLE_IMAGE_TEXT,
        BLANK
    ]
}

