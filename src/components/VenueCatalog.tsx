import Link from "next/link";
import Card from "./Card";

export default function VenueCatalog({venuesJson} : {venuesJson : Promise<VenueJson>}){

    return (
        <div>
           <div style={{margin: "20px"}}>Explore {venuesJson.count} fabulous venues in our venue catalog</div>
            <div style={{color: "black"}}className="flex flex-row gap-[30px] justify-around flex-wrap ">
                {
                    venuesJson.data.map((venueItem: VenueItem) => (
                        <Link href={`/venue/${venueItem.id}`} key={venueItem.id}>
                            <Card venueName={venueItem.name} imgSrc={venueItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}