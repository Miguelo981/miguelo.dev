import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles_options from "../assets/particles/link.json"

export default function HomeBG() {
    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    return (
        <Particles className='opacity-25 absolute' id="tsparticles" params={particles_options as any} /* url="/assets/particles/link.json" */ init={particlesInit} />
    )
};