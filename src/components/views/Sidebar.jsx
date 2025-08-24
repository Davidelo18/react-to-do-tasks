import Button from "../ui/Button";

export default function Sidebar() {
    return <div className="bg-emerald-900 w-[300px] px-8 py-16 rounded-r-lg">
        <h1 className="uppercase mb-4 font-bold">Your projects</h1>
        <Button>+ Add project</Button>
    </div>
}