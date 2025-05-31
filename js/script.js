$(document).ready(function() {
    // Handle thumbnail click
    $('.thumbnail').click(function() {
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
        const newSrc = $(this).data('src');
        $('#mainScreenshot').attr('src', newSrc);
        
        // Add animation effect
        $('#mainScreenshot').css('opacity', '0.7');
        setTimeout(() => {
            $('#mainScreenshot').css('opacity', '1');
        }, 200);
    });
    
    // Download button animation
    $('#downloadBtn').click(function() {
        const $btn = $(this);
        
        // Disable button during download
        $btn.prop('disabled', true);
        
        // Simulate download
        $btn.html('<i class="fas fa-spinner fa-spin"></i> Downloading...');
        
        setTimeout(() => {
            $btn.html('<i class="fas fa-check"></i> Download Complete!');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                $btn.html('<i class="fas fa-download"></i> Download Now');
                $btn.prop('disabled', false);
            }, 3000);
        }, 2000);
    });
    
    // Add hover effect to features
    $('.features li').hover(
        function() {
            $(this).css('transform', 'translateX(5px)');
        },
        function() {
            $(this).css('transform', 'translateX(0)');
        }
    );
});
