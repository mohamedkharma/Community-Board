import React from "react";
import Event from './Event'

const Places = () => {
    const place1 = {
        name: 'Statue of Liberty',
        location: 'Liberty Island',
        image: 'https://images.unsplash.com/photo-1536291652428-5028d25d3329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        url: 'https://www.tripadvisor.com/AttractionProductReview-g60763-d11449825-New_York_City_Statue_of_Liberty_Super_Express_Cruise-New_York_City_New_York.html'
        };
    const place2 = {
        name: 'Brooklyn Bridge',
        location: 'City Hall Park',
        image: 'https://images.unsplash.com/photo-1668997834832-179893477cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d102741-Reviews-Brooklyn_Bridge-New_York_City_New_York.html'
        };
    const place3 = {
        name: 'Grand Central Terminal',
        location: '42nd Street and Park Avenue',
        image: 'https://images.unsplash.com/photo-1578172187839-7d99c8d348c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d103371-Reviews-Grand_Central_Terminal-New_York_City_New_York.html'
        };
    const place4 = {
        name: 'Empire State Building',
        location: '350 Fifth Ave',
        image: 'https://images.unsplash.com/photo-1533348239637-984bae0f8a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d104365-Reviews-Empire_State_Building-New_York_City_New_York.html'
        };
    const place5 = {
        name: 'Central Park',
        location: '59th to 110th Streets',
        image: 'https://images.unsplash.com/photo-1541083466093-e52f837b195e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d105127-Reviews-Central_Park-New_York_City_New_York.html'
        };
    const place6 = {
        name: 'Times Square',
        location: 'West 42nd and West 47th Streets',
        image: 'https://images.unsplash.com/photo-1580775212358-3df3fce6ded6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d110145-Reviews-Times_Square-New_York_City_New_York.html'
        };
    const place7 = {
        name: 'Top of the Rock',
        location: '30 Rockefeller Plaza',
        image: 'https://images.unsplash.com/photo-1672727868602-ec334d32488f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d587661-Reviews-Top_of_the_Rock-New_York_City_New_York.html'
        };
    const place8 = {
        name: 'Broadway',
        location: 'Mid-40s',
        image: 'https://images.unsplash.com/photo-1586903786586-03e01073ba0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d143361-Reviews-Broadway-New_York_City_New_York.html'
        };
    const place9 = {
        name: 'Rockefeller Center',
        location: '30 Rockefeller Plazas',
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/new-york-city-rockefeller-center-ice-rink-black-and-white-christopher-arndt.jpg',
        url: 'https://www.tripadvisor.com/AttractionProductReview-g60763-d11449825-New_York_City_Statue_of_Liberty_Super_Express_Cruise-New_York_City_New_York.html'
        };
    const place10 = {
        name: 'National 9/11 Memorial/Museum',
        location: '90 West Street',
        image: 'https://images.unsplash.com/photo-1631216167010-cf1a65c06176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d1687489-Reviews-The_National_9_11_Memorial_Museum-New_York_City_New_York.html'
        };
    const place11 = {
        name: 'Metropolitan Museum of Art',
        location: '1000 Fifth Avenue',
        image: 'https://images.unsplash.com/photo-1608552938503-9211bf554f22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d105125-Reviews-The_Metropolitan_Museum_of_Art-New_York_City_New_York.html'
        };
    const place12 = {
        name: 'The High Line',
        location: 'Gansevoort Street to West 34th Street',
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/walking-the-high-line-park-through-new-york-city-usa-joe-fox.jpg',
        url: 'https://www.tripadvisor.com/Attraction_Review-g60763-d519474-Reviews-The_High_Line-New_York_City_New_York.html'
        };
  return (
    <div className="Places">
      <Event name={place1.name} location={place1.location} image={place1.image} url={place1.url} />
      <Event name={place2.name} location={place2.location} image={place2.image} url={place2.url} />
      <Event name={place3.name} location={place3.location} image={place3.image} url={place3.url} />
      <Event name={place4.name} location={place4.location} image={place4.image} url={place4.url} />
      <Event name={place5.name} location={place5.location} image={place5.image} url={place5.url} />
      <Event name={place6.name} location={place6.location} image={place6.image} url={place6.url} />
      <Event name={place7.name} location={place7.location} image={place7.image} url={place7.url} />
      <Event name={place8.name} location={place8.location} image={place8.image} url={place8.url} />
      <Event name={place9.name} location={place9.location} image={place9.image} url={place9.url} />
      <Event name={place10.name} location={place10.location} image={place10.image} url={place10.url} />
      <Event name={place11.name} location={place11.location} image={place11.image} url={place11.url} />
      <Event name={place12.name} location={place12.location} image={place12.image} url={place12.url} />
    </div>
  );
}

export default Places;