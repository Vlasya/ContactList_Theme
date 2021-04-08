import {useTheme} from "./useTheme";

export function useThemeStyles() {
    const {theme}= useTheme()
    return {
        wrapper: {
            background: theme.background,
            display: 'flex',
            color: theme.color,
        },
        container:{
            width:'70%',
            margin:'0px auto'
        },
        list: {
            background: theme.background,
            color: theme.color,
            width: '70%',
            margin: '0 auto',

        },
        listItem: {
            background: theme.blockColor,
            color: theme.color,
            display:'flex',
            padding:'10px',
            marginBottom:'4px',
            justifyContent:'space-around',
            border:`1px solid ${theme.blockColor}`,
            borderRadius:'5px',
        },
        button:{
            background: theme.background,
            color: theme.color,
            padding: '5px',
            width:'100px',
            cursor:'pointer',
            textTransform:'uppercase',
            border:`1px solid ${theme.borderColor}`,
            borderRadius:'5px'

        },
        div:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'start'
        }
    }
}

