$(document).ready(function() {
    $('#comment-form').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        var post_id = $(this).data('post-id');
        $.ajax({
            url: '/post/' + post_id + '/comment/',
            type: 'POST',
            data: formData,
            success: function(data) {
                if (data.success) {
                    // Refresh comments section or display the new comment
                } else {
                    // Handle error
                }
            }
        });
    });
});
