import React from 'react';

const GalleryPage = () => (
  <div style={{backgroundColor:'lemonchiffon'}}>
    <h1>Gallery</h1>
    <h2>Photos</h2>
    <div>
      <img src="https://canossasecondaryandheri.org/wp-content/uploads/2015/04/Annual-Sports-Day.jpg" alt="Sports Day" height={300} width={400} />
      <p>Students participating in various sports events.</p>
    </div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4sGrWes5jwtt5Ae3oVrBUwLSICBRTB2htg&s" alt="Science Exhibition" height={300} width={400} />
      <p>Students presenting their science projects.</p>
    </div>
    <div>
      <img src="https://dikshant.org/school/wp-content/uploads/60974662_2430368560531938_7556910084463263744_n-2.jpg" alt="Cultural Fest" height={300} width={400} />
      <p>Students performing in the cultural fest.</p>
    </div>
    <div>
      <img src="https://cdn2.hubspot.net/hubfs/2174926/IMG_0300.jpg" alt="Classroom" height={300} width={400} />
      <p>A glimpse of our interactive classrooms.</p>
    </div>
    <div>
      <img src="https://5.imimg.com/data5/DQ/AZ/PX/SELLER-9301261/al-sadiq-22-768-x-513-768x513-jpg.jpg" alt="Library"  height={300} width={400}    />
      <p>Students reading and studying in the school library.</p>
    </div>
    <h2>Videos</h2>
    <div>
      <video controls width="400">
        <source src="https://via.placeholder.com/400x300" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Virtual tour of Springdale Public School.</p>
    </div>
    <div>
      <video controls width="400">
        <source src="https://via.placeholder.com/400x300" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Highlights from the Annual Function 2023.</p>
    </div>
  </div>
);

export default GalleryPage;
