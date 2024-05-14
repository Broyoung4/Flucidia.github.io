interface TabProps { 
  title?: string | JSX.Element, // Title of the tab 
  isSelected: boolean, // Indicates if the tab is currently selected
  change?: () => any, // Function called when the tab is clicked
}


const Tab = ({title, change, isSelected}: TabProps ) => {
   const buttonStyles = isSelected ? 'border-b-2 border-b-sea-green' : ''
  return (

      <div>
        <button className={`${buttonStyles} text-xl font-montserrat font-medium hover:text-slate-gray`}  onClick={change}>
          {title}
        </button>
      </div>
  )
}

export default Tab