import Button from "../ui/Button";
import InputField from "../ui/InputField";

export default function NewView({ inputTitleRef, inputDescriptionRef, inputDateRef, handleViewChange, handleSaveProject }) {
    return (
        <>
            <div className='w-[400px] mt-8'>
                <InputField id="title" label="Title" ref={inputTitleRef} />
                <InputField id="description" label="Description" ref={inputDescriptionRef} />
                <InputField id="date" label="Due Date" type="date" ref={inputDateRef} />
            </div>
            <div className='flex gap-2'>
                <Button isLink onClick={() => handleViewChange('empty')}>Cancel</Button>
                <Button onClick={handleSaveProject}>Save</Button>
            </div>
        </>
    )
}