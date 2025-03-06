// para desactivar todas las advertencias que lanza esLint sobre Props
// rules: {
//     ...js.configs.recommended.rules,
//     ...reactHooks.configs.recommended.rules,
//     'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     "react/prop-types": "off" ***AÑADIR ESTA LÍNEA
//   },


function Child(props) {
    //destructuring  - desestructurando "mejorar la claridad del código.
    const {msg, person} = props;

    return (
        <>
            <h3>Este es componente hijo</h3>
            <p>{msg}</p>
            <div>{person.sex} - {person.age}</div>
        </>
    

        
    )
} export default Child