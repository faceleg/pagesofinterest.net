# frozen_string_literal: true

require 'jekyll_asset_pipeline'

module JekyllAssetPipeline
  # Helper class to allow yui compressor for CSS
  class CssCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      YUI::CssCompressor.new.compress(@content)
    end
  end

  # Helper class to allow closure compiler for javascript
  class JavaScriptCompressor < JekyllAssetPipeline::Compressor
    require 'closure-compiler'

    def self.filetype
      '.js'
    end

    def compress
      closure = Closure::Compiler.new(language_in: 'ES6', compilation_level: 'ADVANCED_OPTIMIZATIONS')
      closure.compile(@content)
    end
  end
end
