var cn = {
  'sProcessing': '处理中...',
  'sLengthMenu': '显示 _MENU_ 条结果',
  'sZeroRecords': '没有匹配结果',
  'sInfo': '显示第 _START_ 至 _END_ 条结果，共 _TOTAL_ 条',
  'sInfoEmpty': '显示第 0 至 0 条结果，共 0 条',
  'sInfoFiltered': '(每页显示 _MAX_ 条)',
  'sInfoPostFix': '',
  'sSearch': '关键字搜索:',
  'sUrl': '',
  'sEmptyTable': '表中数据为空',
  'sLoadingRecords': '载入中...',
  'sInfoThousands': ',',
  'oPaginate': {
    'sFirst': '首页',
    'sPrevious': '上页',
    'sNext': '下页',
    'sLast': '末页'
  },
  'oAria': {
    'sSortAscending': ': 以升序排列此列',
    'sSortDescending': ': 以降序排列此列'
  }
};

// DataTables 默认配置

$.extend($.fn.dataTable.defaults, {
  searching: false,
  language: cn,
  showRowNumber: true
});

$.extend($.fn.dataTable.ext.classes, {
  "sTable": "dataTable",
  "sNoFooter": "no-footer",

  /* Paging buttons */
  "sPageButton": "paginate_button",
  "sPageButtonActive": "current",
  "sPageButtonDisabled": "disabled",

  /* Striping classes */
  "sStripeOdd": "el-table__row",
  "sStripeEven": "el-table__row el-table__row--striped",

  /* Empty row */
  "sRowEmpty": "dataTables_empty",

  /* Features */
  "sWrapper": "dataTables_wrapper",
  "sFilter": "dataTables_filter",
  "sInfo": "dataTables_info",
  "sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
  "sLength": "dataTables_length",
  "sProcessing": "dataTables_processing",

  /* Sorting */
  "sSortAsc": "sorting_asc",
  "sSortDesc": "sorting_desc",
  "sSortable": "sorting", /* Sortable in both directions */
  "sSortableAsc": "sorting_asc_disabled",
  "sSortableDesc": "sorting_desc_disabled",
  "sSortableNone": "sorting_disabled",
  "sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */

  /* Filtering */
  "sFilterInput": "datatables-el-input__inner",

  /* Page length */
  "sLengthSelect": "",

  /* Scrolling */
  "sScrollWrapper": "dataTables_scroll",
  "sScrollHead": "dataTables_scrollHead",
  "sScrollHeadInner": "dataTables_scrollHeadInner",
  "sScrollBody": "dataTables_scrollBody",
  "sScrollFoot": "dataTables_scrollFoot",
  "sScrollFootInner": "dataTables_scrollFootInner",

  /* Misc */
  "sHeaderTH": "",
  "sFooterTH": "",

  // Deprecated
  "sSortJUIAsc": "",
  "sSortJUIDesc": "",
  "sSortJUI": "",
  "sSortJUIAscAllowed": "",
  "sSortJUIDescAllowed": "",
  "sSortJUIWrapper": "",
  "sSortIcon": "",
  "sJUIHeader": "",
  "sJUIFooter": ""
});

// From https://github.com/jquery/jquery/blob/master/src/serialize.js
// Overrides data serialization to allow Spring MVC to correctly map input parameters : column[0][data] now becomes column[0].data
(function ($) {
  var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function customBuildParams(prefix, obj, traditional, add) {
    var name;

    if (jQuery.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);

        } else {
          // Item is non-scalar (array or object), encode its numeric
          // index.
          customBuildParams(prefix + '['
            + (typeof v === 'object' ? i : '') + ']', v,
            traditional, add);
        }
      });

    } else if (!traditional && jQuery.type(obj) === 'object') {
      // Serialize object item.
      for (name in obj) {
        // This is where the magic happens
        customBuildParams(prefix + '.' + name, obj[name], traditional,
          add);
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  }

  $.param = function (a, traditional) {
    var prefix, s = [], add = function (key, value) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction(value) ? value() : (value == null ? ''
        : value);
      s[s.length] = encodeURIComponent(key) + '='
        + encodeURIComponent(value);
    };

    // Set traditional to true for jQuery <= 1.3.2 behavior.
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings
        && jQuery.ajaxSettings.traditional;
    }

    // If an array was passed in, assume that it is an array of form
    // elements.
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });

    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        customBuildParams(prefix, a[prefix], traditional, add);
      }
    }

    // Return the resulting serialization
    return s.join('&').replace(r20, '+');
  };
})(jQuery);
