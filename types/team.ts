export type Player = { id: number; name: string; position: string };

export type Team = {
    id: number;
    name: string;
    image: {
        src: string;
        alt: string;
    };
    players: Player[];
};
