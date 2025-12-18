// Componenets Attachment
$(document).ready(function () {
  $("#whatsappChat").load("whatsappchat.html");
});

$(document).ready(function () {
  $("#socialmedia").load("socialmedia.html");
});

$(document).ready(function () {
  $("#header").load("header.html");
});

$(document).ready(function () {
  $("#bannerSlide").load("bannerSliderv1.html");
});

$(document).ready(function () {
  $("#landingAbout").load("landingAbout.html");
});

$(document).ready(function () {
  $("#aboutCont").load("aboutContent.html");
});

$(document).ready(function () {
  $("#aboutDetail").load("aboutDetail.html");
});

$(document).ready(function () {
  $("#services").load("services.html");
});

$(document).ready(function () {
  $("#gettouch").load("gettouch.html");
});

$(document).ready(function () {
  $("#serve").load("serve.html");
});

$(document).ready(function () {
  $("#whychoose").load("whychoose.html");
});

$(document).ready(function () {
  $("#testimonial").load("testimonialv1.html");
});

$(document).ready(function () {
  $("#secure").load("secure.html");
});

$(document).ready(function () {
  $("#landBlog").load("landBlog.html");
});

$(document).ready(function () {
  $("#landVideo").load("landVideo.html");
});

$(document).ready(function () {
  $("#breadCrump").load("breadcrumb.html");
});

$(document).ready(function () {
  $("#visionMission").load("visionMissionv1.html");
});

$(document).ready(function () {
  $("#landContact").load("landContact.html");
});

$(document).ready(function () {
  $("#footer").load("footer.html");
});

$(document).ready(function () {
  $("#copyright").load("copyright.html");
});
// Components Attachment

// Header
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');

      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});
// Header

$(document).ready(function () {
  $.getJSON("blog.json", function (data) {
    var blogContent = '';
    data.forEach(function (blog) {
      blogContent += `
      <div class="col-md-4">
        <div class="card h-100">
          <a href="blogdetail.html?id=${blog.id}" style="text-decoration: none;color: #000;">
            <img src="${blog.img}" class="card-img-top" alt="..." height="280">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-start align-items-center gap-2">
                  <img src="images/aayar.jpg" alt="" width="50" style="border-radius: 50%;">
                  <div>
                    <p class="mb-0">${blog.author}</p>
                    <p class="mb-0">${blog.date}</p>
                  </div>
                </div>
                <div class="bg-light" style="border-radius: 50%;width: 50px;height: 50px;text-align: center;line-height: 50px;">
                  <i class="fas fa-share text-success"></i>
                </div>
              </div>
              <h5 class="card-title lh-base mt-2">${blog.title}</h5>
              <p class="card-text">${blog.shortCon}</p>
            </div>
          </a>
        </div>
        </div>
      `;
    });
    $('#blog').html(blogContent);
  });
});


$(document).ready(function () {
  // Function to get URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Get the blog ID from the URL
  var blogId = getUrlParameter('id');

  // Fetch the blog data
  $.getJSON("blog.json", function (data) {
    var blog = data.find(function (item) {
      return item.id == blogId;
    });

    if (blog) {
      // Populate the blog detail page with the blog data
      var blogDetailContent = `
          <div class="container-md my-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="d-flex justify-content-start align-items-center gap-2">
        <img src="images/aayar.jpg" alt="" width="50" style="border-radius: 50%;">
        <div>
          <p class="mb-0">${blog.author}</p>
          <p class="mb-0">${blog.date}</p>
        </div>
      </div>
      <div class="bg-light" style="border-radius: 50%;width: 50px;height: 50px;text-align: center;line-height: 50px;">
        <i class="fas fa-share text-success"></i>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1 class="text-start mb-4">${blog.title}</h1>
      </div>
      <div class="col-12">
        <img src="${blog.img}" alt="" class="float-end me-4 mb-4 p-3" style="width: 50%; max-width: 700px;">
       ${blog.content}
      </div>
    </div>
  </div>
      `;
      $('#blogDetail').html(blogDetailContent);
    } else {
      $('#blogDetail').html('<p>Blog not found.</p>');
    }
  });
});

document.getElementById('registerForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const btn = document.getElementById('formButton');

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ily3rzp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      window.location.reload();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('number').value;

    const maxLength = 2000; // Example length, adjust as necessary
    const baseMessage = `Hello Aayarpadi Team!! \nI need the following request`;
          let fullMessage = `${baseMessage}\n\nName  - ${name}\n\nEmail  - ${email}\n\nPhone  - ${phoneNumber}`;
          
          if (fullMessage.length > maxLength) {
              fullMessage = fullMessage.slice(0, maxLength);
          }

          const whatsappUrl = `https://wa.me/+919789067232/?text=${encodeURIComponent(fullMessage)}`;
          window.open(whatsappUrl);
});

// Companies Act Section Switching
document.addEventListener('DOMContentLoaded', function() {
    const sectionLinks = document.querySelectorAll('.sidebar li[data-id]');
    const sections = document.querySelectorAll('.content .section');

    sectionLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links and sections
            sectionLinks.forEach(l => l.classList.remove('active', 'bg-light', 'rounded'));
            sections.forEach(s => s.classList.add('d-none'));

            // Add active class to clicked link and corresponding section
            this.classList.add('active', 'bg-light', 'rounded');
            const sectionId = this.getAttribute('data-id');
            document.getElementById(sectionId).classList.remove('d-none');
        });
    });
});

